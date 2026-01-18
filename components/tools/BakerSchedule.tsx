
import React, { useState, useMemo, useEffect } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ChecklistIcon, PlusCircleIcon, ShareIcon, DownloadIcon, PrintIcon, RefreshCwIcon, CalendarIcon, ShoppingCartIcon, MenuIcon, Trash2Icon, EditIcon, ArrowLeftIcon, ChevronRightIcon, InfoIcon } from '../Icons';

type Priority = 'Low' | 'Medium' | 'High';
type Filter = 'All' | 'Today' | 'This Week' | 'This Month';

interface Task {
    id: number;
    text: string;
    dueDate: string; // YYYY-MM-DD
    priority: Priority;
    completed: boolean;
}

interface BakerScheduleProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const priorityStyles: Record<Priority, { bg: string, text: string, border: string, tagBg: string, tagText: string }> = {
    Low: { bg: 'bg-gray-50', text: 'text-gray-800', border: 'border-gray-200', tagBg: 'bg-gray-200', tagText: 'text-gray-700' },
    Medium: { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-200', tagBg: 'bg-yellow-200', tagText: 'text-yellow-800' },
    High: { bg: 'bg-red-50', text: 'text-red-800', border: 'border-red-200', tagBg: 'bg-red-200', tagText: 'text-red-800' },
};

const getDateStyles = (dueDate: string, completed: boolean): string => {
    if (completed || !dueDate) return 'text-brand-text-body/70';

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(dueDate + 'T00:00:00');

    if (taskDate < today) {
        return 'text-red-600 font-semibold'; // Overdue
    }
    if (taskDate.getTime() === today.getTime()) {
        return 'text-orange-600 font-semibold'; // Due today
    }
    return 'text-brand-text-body/70'; // Upcoming
};

export const BakerSchedule: React.FC<BakerScheduleProps> = ({ setActiveTool, breadcrumbs }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState<Priority>('Medium');
    const [filter, setFilter] = useState<Filter>('All');
    const [view, setView] = useState<'Agenda' | 'Calendar' | 'Shopping'>('Agenda');
    const [currentDate, setCurrentDate] = useState(new Date());

    // State for inline editing
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editText, setEditText] = useState('');
    const [editDate, setEditDate] = useState('');
    const [editPriority, setEditPriority] = useState<Priority>('Medium');

    const completedTasksCount = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);
    const progress = useMemo(() => tasks.length > 0 ? (completedTasksCount / tasks.length) * 100 : 0, [completedTasksCount, tasks.length]);

    const filteredTasks = useMemo(() => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        return tasks
            .filter(task => {
                if (filter === 'All') return true;
                if (!task.dueDate) return false;

                const taskDate = new Date(task.dueDate + 'T00:00:00');

                if (filter === 'Today') {
                    return taskDate.toDateString() === now.toDateString();
                }
                if (filter === 'This Week') {
                    const startOfWeek = new Date(now);
                    startOfWeek.setDate(now.getDate() - now.getDay());
                    const endOfWeek = new Date(startOfWeek);
                    endOfWeek.setDate(startOfWeek.getDate() + 6);
                    return taskDate >= startOfWeek && taskDate <= endOfWeek;
                }
                if (filter === 'This Month') {
                    return taskDate.getMonth() === now.getMonth() && taskDate.getFullYear() === now.getFullYear();
                }
                return true;
            })
            .sort((a, b) => {
                // Completed tasks go to the bottom
                if (a.completed && !b.completed) return 1;
                if (!a.completed && b.completed) return -1;

                // Give priority to tasks with due dates
                if (a.dueDate && !b.dueDate) return -1;
                if (!a.dueDate && b.dueDate) return 1;

                // Sort by due date (earliest first)
                if (a.dueDate && b.dueDate) {
                    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
                }

                // If all else is equal, maintain original order
                return 0;
            });
    }, [tasks, filter]);

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskText.trim() === '') return;
        const newTask: Task = {
            id: Date.now(),
            text: taskText.trim(),
            dueDate,
            priority,
            completed: false,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setTaskText('');
        setDueDate('');
        setPriority('Medium');
    };

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (id: number) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    const handleEdit = (task: Task) => {
        setEditingTaskId(task.id);
        setEditText(task.text);
        setEditDate(task.dueDate);
        setEditPriority(task.priority);
    };

    const handleCancelEdit = () => {
        setEditingTaskId(null);
    };

    const handleSaveEdit = (id: number) => {
        if (editText.trim() === '') {
            alert('Task description cannot be empty.');
            return;
        }
        setTasks(tasks.map(t =>
            t.id === id
                ? { ...t, text: editText, dueDate: editDate, priority: editPriority }
                : t
        ));
        setEditingTaskId(null);
    };


    const handleResetAll = () => {
        if (window.confirm('Are you sure you want to delete all tasks? This cannot be undone.')) {
            setTasks([]);
        }
    };

    const handleShare = async () => {
        const taskList = tasks.map(t => `${t.completed ? '[x]' : '[ ]'} ${t.text} (Due: ${t.dueDate || 'N/A'})`).join('\n');
        const shareData = { title: "My Baker's Todo List", text: taskList };
        try {
            if (navigator.share) await navigator.share(shareData);
            else alert('Web Share API is not supported in your browser.');
        } catch (err) { console.error('Error sharing:', err); }
    };

    const handleExport = () => {
        const taskList = tasks.map(t => `${t.completed ? '[x]' : '[ ]'} ${t.text}\n  Priority: ${t.priority}\n  Due: ${t.dueDate || 'N/A'}`).join('\n\n');
        const blob = new Blob([taskList], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'bakers-todo-list.txt';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handlePrint = () => window.print();

    useEffect(() => {
        try { const savedTasks = localStorage.getItem('bakerTodoListTasks'); if (savedTasks) setTasks(JSON.parse(savedTasks)); } catch (e) { console.error("Could not load tasks from local storage", e); }
    }, []);

    useEffect(() => {
        localStorage.setItem('bakerTodoListTasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `@media print { body * { visibility: hidden; } .printable-area, .printable-area * { visibility: visible; } .printable-area { position: absolute; left: 0; top: 0; width: 100%; padding: 20px; } .no-print { display: none !important; } }`;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    const AgendaView = () => (
        <div className="space-y-3">
            {filteredTasks.length > 0 ? (
                filteredTasks.map(task => (
                    <div key={task.id}>
                        {editingTaskId === task.id ? (
                            <div className="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-400 space-y-3">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="w-full font-medium text-brand-text-title border-b-2 border-yellow-300 focus:outline-none focus:border-yellow-500 bg-transparent"
                                    aria-label="Edit task description"
                                />
                                <div className="flex items-center gap-4 text-xs">
                                    <input
                                        type="date"
                                        value={editDate}
                                        onChange={(e) => setEditDate(e.target.value)}
                                        className="text-brand-text-body/70 border-b border-yellow-300 focus:outline-none focus:border-yellow-500 bg-transparent"
                                        aria-label="Edit due date"
                                    />
                                    <div className="flex gap-1" role="group" aria-label="Edit priority">
                                        {(['Low', 'Medium', 'High'] as Priority[]).map(p => (
                                            <button key={p} type="button" onClick={() => setEditPriority(p)} className={`px-2 py-0.5 rounded-full font-semibold text-xs ${editPriority === p ? `${priorityStyles[p].tagBg} ${priorityStyles[p].tagText}` : 'bg-gray-200 text-gray-600'}`}>
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleSaveEdit(task.id)} className="text-sm font-semibold bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">Save</button>
                                    <button onClick={handleCancelEdit} className="text-sm font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300">Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <div className={`flex items-start gap-3 p-4 rounded-lg border-l-4 ${priorityStyles[task.priority].bg} ${priorityStyles[task.priority].border} group`}>
                                <input id={`task-${task.id}`} type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="mt-1 h-5 w-5 rounded border-gray-300 text-brand-pink focus:ring-brand-pink flex-shrink-0" />
                                <div className="flex-grow">
                                    <label htmlFor={`task-${task.id}`} className={`font-medium cursor-pointer ${task.completed ? 'line-through text-brand-text-body/50' : 'text-brand-text-title'}`}>{task.text}</label>
                                    <div className="flex items-center gap-4 text-xs mt-1">
                                        {task.dueDate && <span className={getDateStyles(task.dueDate, task.completed)}>{new Date(task.dueDate + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>}
                                        <span className={`px-2 py-0.5 rounded-full font-semibold ${priorityStyles[task.priority].tagBg} ${priorityStyles[task.priority].tagText}`}>{task.priority}</span>
                                    </div>
                                </div>
                                <div className="flex gap-1.5 no-print opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                    <button onClick={() => handleEdit(task)} className="text-gray-400 hover:text-blue-500" aria-label={`Edit task: ${task.text}`}><EditIcon className="w-5 h-5" /></button>
                                    <button onClick={() => deleteTask(task.id)} className="text-gray-400 hover:text-red-500" aria-label={`Delete task: ${task.text}`}><Trash2Icon className="w-5 h-5" /></button>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-brand-text-body/70 py-16">
                    <ChecklistIcon className="w-12 h-12 text-gray-300 mb-4" />
                    <h3 className="font-bold text-lg text-brand-text-title">You're all set!</h3>
                    <p>Add a new task to get started.</p>
                </div>
            )}
        </div>
    );

    const CalendarView = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const startingDayOfWeek = firstDayOfMonth.getDay();

        const calendarDays = [];
        for (let i = 0; i < startingDayOfWeek; i++) {
            const date = new Date(firstDayOfMonth);
            date.setDate(date.getDate() - (startingDayOfWeek - i));
            calendarDays.push({ date, isCurrentMonth: false });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            calendarDays.push({ date, isCurrentMonth: true });
        }

        const remainingCells = 42 - calendarDays.length;
        for (let i = 1; i <= remainingCells; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i);
            calendarDays.push({ date, isCurrentMonth: false });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tasksByDate = useMemo(() => {
            const map = new Map<string, Task[]>();
            tasks.forEach(task => {
                if (task.dueDate) {
                    const dateStr = new Date(task.dueDate + 'T00:00:00').toDateString();
                    if (!map.has(dateStr)) map.set(dateStr, []);
                    map.get(dateStr)!.push(task);
                }
            });
            return map;
        }, [tasks]);

        const goToPrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        const goToNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

        return (
            <div>
                <div className="flex items-center justify-between mb-4">
                    <button onClick={goToPrevMonth} className="p-2 rounded-full hover:bg-gray-100"><ArrowLeftIcon className="w-6 h-6" /></button>
                    <h3 className="text-xl font-bold font-serif text-brand-text-title">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h3>
                    <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-gray-100"><ChevronRightIcon className="w-6 h-6" /></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-brand-text-body/80">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="py-2">{day}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map(({ date, isCurrentMonth }, index) => {
                        const dateStr = date.toDateString();
                        const isToday = date.toDateString() === today.toDateString();
                        const dailyTasks = tasksByDate.get(dateStr) || [];
                        return (
                            <div key={index} className={`h-32 rounded-lg p-1.5 border overflow-hidden ${isToday ? 'border-brand-pink bg-brand-pink-light' : 'border-brand-border'} ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'}`}>
                                <p className={`text-xs font-bold ${isCurrentMonth ? 'text-brand-text-body' : 'text-gray-400'}`}>
                                    {date.getDate()}
                                </p>
                                <div className="space-y-1 mt-1 overflow-y-auto max-h-24 text-left">
                                    {dailyTasks.map(task => (
                                        <div key={task.id} className={`text-xs p-1 rounded-sm ${priorityStyles[task.priority].bg} ${priorityStyles[task.priority].text} truncate border-l-2 ${priorityStyles[task.priority].border}`} title={task.text}>
                                            <span className={`w-2 h-2 inline-block rounded-full mr-1 ${priorityStyles[task.priority].tagBg}`}></span>
                                            {task.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const ShoppingListView = () => (
        <div className="flex flex-col items-center justify-center h-full text-center text-brand-text-body/70 py-16">
            <ShoppingCartIcon className="w-12 h-12 text-gray-300 mb-4" />
            <h3 className="font-bold text-lg text-brand-text-title">Shopping List</h3>
            <p className="max-w-xs mx-auto mt-2">We have a dedicated <strong>Shopping List Tool</strong>! Please use that for a more complete experience.</p>
            <button onClick={() => setActiveTool('shopping-list')} className="mt-4 text-brand-pink font-bold hover:underline">Go to Shopping List &rarr;</button>
        </div>
    );

    return (
        <ToolContainer
            title="Baker's Todo List"
            description="Organize your prep, shopping, and baking schedules. Your tasks are saved in your browser."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="baker-schedule"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Panel */}
                <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-brand-border h-fit md:sticky top-6 no-print">
                    <div className="my-6">
                        <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-brand-pink h-2.5 rounded-full" style={{ width: `${progress}%` }}></div></div>
                        <p className="text-center text-xs text-brand-text-body/80 mt-1">{Math.round(progress)}% Complete</p>
                    </div>

                    <form onSubmit={handleAddTask} className="space-y-4">
                        <div>
                            <label htmlFor="task-text-input" className="sr-only">New task description</label>
                            <input id="task-text-input" type="text" value={taskText} onChange={e => setTaskText(e.target.value)} placeholder="e.g., Chill cookie dough..." className="w-full px-4 py-2 border border-brand-border rounded-lg" required />
                        </div>
                        <div>
                            <label htmlFor="due-date-input" className="sr-only">Task due date</label>
                            <input id="due-date-input" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="w-full px-4 py-2 border border-brand-border rounded-lg text-brand-text-body/80" />
                        </div>

                        <fieldset>
                            <legend className="text-sm font-semibold text-brand-text-title mb-2 block">Priority</legend>
                            <div className="grid grid-cols-3 gap-2">
                                {(['Low', 'Medium', 'High'] as Priority[]).map(p => (
                                    <button key={p} type="button" onClick={() => setPriority(p)} className={`py-2 font-semibold rounded-lg text-sm ${priority === p ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{p}</button>
                                ))}
                            </div>
                        </fieldset>

                        <button type="submit" className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"><PlusCircleIcon className="w-5 h-5" /> Add Task</button>
                    </form>

                    <div className="grid grid-cols-2 gap-2 mt-6 text-sm">
                        <button onClick={handleShare} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg flex items-center justify-center gap-1.5"><ShareIcon className="w-4 h-4" /> Share</button>
                        <button onClick={handleExport} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg flex items-center justify-center gap-1.5"><DownloadIcon className="w-4 h-4" /> Export .txt</button>
                        <button onClick={handlePrint} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg flex items-center justify-center gap-1.5"><PrintIcon className="w-4 h-4" /> Print</button>
                        <button onClick={handleResetAll} className="bg-red-100 text-red-700 hover:bg-red-200 p-2 rounded-lg flex items-center justify-center gap-1.5"><RefreshCwIcon className="w-4 h-4" /> Reset All</button>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="md:col-span-2 printable-area" id="print-area">
                    <div className="flex items-center justify-between flex-wrap gap-4 no-print">
                        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-brand-border">
                            {(['Agenda', 'Calendar', 'Shopping'] as const).map(v => (
                                <button key={v} onClick={() => setView(v)} className={`px-4 py-1.5 rounded-md text-sm font-semibold flex items-center gap-2 ${view === v ? 'bg-brand-pink-light text-brand-pink' : 'text-brand-text-body'}`}>
                                    {v === 'Agenda' && <MenuIcon className="w-4 h-4" />}
                                    {v === 'Calendar' && <CalendarIcon className="w-4 h-4" />}
                                    {v === 'Shopping' && <ShoppingCartIcon className="w-4 h-4" />}
                                    {v}
                                </button>
                            ))}
                        </div>
                        {view === 'Agenda' && (
                            <div className="flex items-center gap-2 text-sm">
                                <span className="font-semibold text-brand-text-body">Filter by:</span>
                                {(['All', 'Today', 'This Week', 'This Month'] as Filter[]).map(f => (
                                    <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 font-semibold rounded-full ${filter === f ? 'bg-brand-pink text-white' : 'bg-white text-brand-text-body'}`}>{f}</button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mt-6 border-2 border-dashed border-brand-border rounded-xl p-6 min-h-[400px]">
                        {view === 'Agenda' && <AgendaView />}
                        {view === 'Calendar' && <CalendarView />}
                        {view === 'Shopping' && <ShoppingListView />}
                    </div>
                </div>
            </div>


            <BakerScheduleContent />
        </ToolContainer >
    );
};

const BakerScheduleContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use the Baker's Schedule
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Add Tasks:</strong> Enter a task (e.g., "Feed Sourdough Starter"), set a due date, and assign a priority.</li>
                <li><strong>Manage Views:</strong> Switch between "Agenda" (list view) and "Calendar" (monthly view) to visualize your workload.</li>
                <li><strong>Track Progress:</strong> Check off tasks as you go. The progress bar will update automatically.</li>
                <li><strong>Export & Share:</strong> Use the buttons to print your daily list or export it to a text file.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Does this sync with Google Calendar?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Currently, this is a standalone browser-based tool. We are exploring integrations for future updates.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        How do I prioritize tasks?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Use the "High", "Medium", and "Low" buttons when adding a task. High priority tasks are highlighted in red.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Is my schedule private?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yes! All data is stored locally on your device. We do not see or store your personal schedule.
                    </p>
                </details>
            </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Master Your Baking Timeline</h3>
            <p className="text-sm text-brand-text-body/80 leading-relaxed mb-4">
                Timing is everything in baking. From proofing dough to cooling cakes, a tight <strong>bakery production schedule</strong> is essential. Our <strong>free baker's schedule tool</strong> helps you visualize your day, week, and month.
            </p>
            <p className="text-sm text-brand-text-body/80 leading-relaxed">
                By creating a clear <strong>baking timeline</strong> and managing your <strong>kitchen workflow</strong>, you can avoid the stress of last-minute rushes. Use this tool to block out time for prep, baking, decorating, and packaging, ensuring every order goes out on time and perfect.
            </p>
        </div>
    </div>
);
