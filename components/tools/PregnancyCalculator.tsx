import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for ToolId.
import type { ToolId } from '../utils/slugs';
import { HeartPulseIcon, InfoIcon, ClipboardIcon, CheckCircleIcon } from '../Icons';

interface PregnancyCalculatorProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

// Comprehensive data for fetal development
const pregnancyData = [
    { week: 1, size: "N/A", length: "N/A", weight: "N/A", development: "The first week of pregnancy is based on the date of your last menstrual period, before conception has actually occurred." },
    { week: 2, size: "N/A", length: "N/A", weight: "N/A", development: "Your body is preparing for ovulation. Fertilization typically occurs at the end of this week." },
    { week: 3, size: "a poppy seed", length: "0.01 in", weight: "<0.01 oz", development: "The blastocyst, a tiny group of cells, is implanting into your uterine lining. This is the very beginning of pregnancy!" },
    { week: 4, size: "a sesame seed", length: "0.04 in", weight: "<0.01 oz", development: "The neural tube, which becomes the brain and spinal cord, is forming. The heart and circulatory system are also beginning to take shape." },
    { week: 5, size: "an appleseed", length: "0.13 in", weight: "<0.01 oz", development: "The heart begins to beat and pump blood. Arm and leg buds appear, and major organs like the brain and liver are growing rapidly." },
    { week: 6, size: "a lentil", length: "0.25 in", weight: "0.04 oz", development: "Facial features like eyes and nostrils are starting to form. The heart is now beating at a regular rhythm." },
    { week: 7, size: "a blueberry", length: "0.51 in", weight: "0.04 oz", development: "The baby is generating about one hundred new brain cells each minute. Tiny hands and feet are emerging from the developing arms and legs." },
    { week: 8, size: "a raspberry", length: "0.63 in", weight: "0.04 oz", development: "All essential organs have begun to form. The baby is moving, but you won't feel it yet. Eyelids and ears are taking shape." },
    { week: 9, size: "a grape", length: "0.9 in", weight: "0.07 oz", development: "The baby is now officially a 'fetus'. Tiny fingers, toes, and essential organs are now in place, and they will continue to mature." },
    { week: 10, size: "a prune", length: "1.22 in", weight: "0.14 oz", development: "Vital organs are fully formed and functional. The baby is swallowing fluid and kicking. Fingernails and toenails are beginning to form." },
    { week: 11, size: "a lime", length: "1.61 in", weight: "0.25 oz", development: "The baby's genitals are forming. The diaphragm is developing, allowing for practice breathing movements." },
    { week: 12, size: "a plum", length: "2.13 in", weight: "0.49 oz", development: "The baby can now make a fist and their unique fingerprints are forming. The kidneys are beginning to produce urine." },
    { week: 13, size: "a peach", length: "2.91 in", weight: "0.81 oz", development: "This week marks the end of the first trimester. Vocal cords are developing, and the baby's intestines are moving into their abdominal cavity." },
    { week: 14, size: "a lemon", length: "3.42 in", weight: "1.52 oz", development: "The baby can now blink, frown, and make other facial expressions. The liver and spleen are producing red blood cells." },
    { week: 15, size: "an apple", length: "3.98 in", weight: "2.47 oz", development: "The skeleton is hardening as bone replaces cartilage. Hair and eyebrows are beginning to grow." },
    { week: 16, size: "an avocado", length: "4.57 in", weight: "3.53 oz", development: "The baby's eyes can now move, and they can hear sounds from outside the womb. Their nervous system is maturing." },
    { week: 17, size: "a pear", length: "5.12 in", weight: "4.94 oz", development: "The baby is starting to accumulate body fat, which will help regulate their temperature after birth." },
    { week: 18, size: "a bell pepper", length: "5.59 in", weight: "6.7 oz", development: "The baby's ears are in their final position, and their hearing is well-established. You might feel the first flutters of movement (quickening)." },
    { week: 19, size: "an heirloom tomato", length: "6.02 in", weight: "8.47 oz", development: "A waxy, protective coating called vernix caseosa is forming on the baby's skin to protect it from the amniotic fluid." },
    { week: 20, size: "a banana", length: "10.08 in (head to heel)", weight: "10.58 oz", development: "You're halfway there! The baby is swallowing more, which is good practice for their digestive system." },
    { week: 21, size: "a carrot", length: "10.51 in", weight: "12.7 oz", development: "The baby is developing a regular sleep-wake cycle. Their bone marrow is now making blood cells." },
    { week: 22, size: "a papaya", length: "10.94 in", weight: "15.17 oz", development: "The baby's lips are distinct, and tooth buds for their baby teeth appear under the gums. Their sense of taste is developing." },
    { week: 23, size: "a large mango", length: "11.38 in", weight: "1.1 lbs", development: "The lungs are developing surfactant, a substance that will help them breathe air after birth. The baby's movements are becoming stronger." },
    { week: 24, size: "an ear of corn", length: "11.81 in", weight: "1.32 lbs", development: "The baby's skin is still thin and translucent, but it's becoming more opaque as fat stores build." },
    { week: 25, size: "a rutabaga", length: "13.6 in", weight: "1.46 lbs", development: "The baby can now respond to your voice with movement. Their hair has color and texture." },
    { week: 26, size: "a head of lettuce", length: "14.02 in", weight: "1.68 lbs", development: "Eyelids can now open and close, and the baby's eyes have developed retinas. Their brain waves show evidence of REM sleep." },
    { week: 27, size: "a cauliflower", length: "14.41 in", weight: "1.93 lbs", development: "This week marks the end of the second trimester. The baby's brain is very active, and they may be able to recognize your voice." },
    { week: 28, size: "an eggplant", length: "14.8 in", weight: "2.22 lbs", development: "The baby is gaining weight rapidly. Their lungs are capable of breathing air, but would still need medical help if born now." },
    { week: 29, size: "a butternut squash", length: "15.2 in", weight: "2.54 lbs", development: "The baby's bones are fully developed but still soft and pliable. Their muscles are getting stronger." },
    { week: 30, size: "a large cabbage", length: "15.71 in", weight: "2.91 lbs", development: "The baby's eyes can open wide. They are surrounded by about a pint and a half of amniotic fluid, which will gradually decrease." },
    { week: 31, size: "a coconut", length: "16.18 in", weight: "3.31 lbs", development: "The baby is practicing breathing movements, and all five senses are in working order." },
    { week: 32, size: "a jicama", length: "16.69 in", weight: "3.75 lbs", development: "The baby is likely in the head-down position now. Their toenails are visible, and layers of fat are plumping them up." },
    { week: 33, size: "a pineapple", length: "17.2 in", weight: "4.23 lbs", development: "The baby can detect light, and their pupils can constrict and dilate. The bones in their skull are not yet fused." },
    { week: 34, size: "a cantaloupe", length: "17.72 in", weight: "4.73 lbs", development: "The baby's central nervous system is maturing, and their lungs are well-developed. The protective vernix is getting thicker." },
    { week: 35, size: "a honeydew melon", length: "18.19 in", weight: "5.25 lbs", development: "The baby has a firm grasp and is gaining about half a pound a week. There is less room to move, so kicks may feel different." },
    { week: 36, size: "a head of romaine lettuce", length: "18.66 in", weight: "5.78 lbs", development: "The baby is 'dropping' into the pelvis, preparing for birth. This is considered 'early term'." },
    { week: 37, size: "a winter melon", length: "19.13 in", weight: "6.3 lbs", development: "The baby's brain and lungs continue to mature. They are practicing skills they'll need after birth, like sucking and swallowing." },
    { week: 38, size: "a pumpkin", length: "19.61 in", weight: "6.8 lbs", development: "The baby has a full head of hair. The vernix caseosa and lanugo (fine hair) are beginning to shed." },
    { week: 39, size: "a watermelon", length: "19.96 in", weight: "7.25 lbs", development: "The baby is now considered 'full term'. Their chest is prominent, and for boys, the testes have descended." },
    { week: 40, size: "a small pumpkin", length: "20.16 in", weight: "7.63 lbs", development: "The baby is ready for birth! Don't worry if you go past your due date; it's very common." },
];

const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(date);
};

export const PregnancyCalculator: React.FC<PregnancyCalculatorProps> = ({ setActiveTool, breadcrumbs }) => {
    const [method, setMethod] = useState<'lmp' | 'conception'>('lmp');
    const [inputDate, setInputDate] = useState(new Date().toISOString().split('T')[0]);
    const [results, setResults] = useState<any>(null);
    const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCalculate = () => {
        const date = new Date(inputDate + 'T00:00:00');
        if (isNaN(date.getTime())) return;

        let lmpDate: Date, conceptionDate: Date, dueDate: Date;

        if (method === 'lmp') {
            lmpDate = date;
            conceptionDate = addDays(lmpDate, 14);
            dueDate = addDays(lmpDate, 280);
        } else {
            conceptionDate = date;
            lmpDate = addDays(conceptionDate, -14);
            dueDate = addDays(conceptionDate, 266);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const daysPregnant = Math.floor((today.getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(daysPregnant / 7);
        const days = daysPregnant % 7;

        const currentWeekForSlider = weeks + 1 > 40 ? 40 : (weeks < 0 ? 1 : weeks + 1);

        setResults({
            conception: formatDate(conceptionDate),
            trimester1End: formatDate(addDays(lmpDate, 97)),
            trimester2End: formatDate(addDays(lmpDate, 188)),
            dueDate: formatDate(dueDate),
            currentWeek: weeks,
            currentDay: days,
        });
        setSelectedWeek(currentWeekForSlider);
    };

    const handleCopy = async () => {
        if (!results) return;
        const text = `Due Date: ${results.dueDate}\nCurrent progress: ${results.currentWeek} weeks and ${results.currentDay} days.`;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            alert('Failed to copy results.');
        }
    };

    const progress = results ? (results.currentWeek / 40) * 100 : 0;
    const weeklyData = selectedWeek ? pregnancyData[selectedWeek - 1] : null;

    const getTrimester = (week: number) => {
        if (week <= 13) return { name: 'First Trimester', color: 'bg-pink-200 text-pink-800', width: '33%' };
        if (week <= 27) return { name: 'Second Trimester', color: 'bg-purple-200 text-purple-800', width: '33%' };
        return { name: 'Third Trimester', color: 'bg-blue-200 text-blue-800', width: '34%' };
    };

    return (
        <ToolContainer title="Free Pregnancy Week by Week Calculator" description="Calculate your due date and track your baby's growth with our free pregnancy week by week calculator. See trimester milestones and development updates." setActiveTool={setActiveTool} breadcrumbs={breadcrumbs} toolId="pregnancy-calculator">
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
                        <h3 className="font-bold text-lg text-brand-text-title mb-4">Your Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-brand-text-title mb-2 block">Calculate based on:</label>
                                <div className="flex gap-1 bg-brand-pink-light p-1 rounded-lg">
                                    <button onClick={() => setMethod('lmp')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${method === 'lmp' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Last Period</button>
                                    <button onClick={() => setMethod('conception')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${method === 'conception' ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-text-body hover:bg-white/50'}`}>Conception Date</button>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-bold text-brand-text-title mb-2 block">
                                    {method === 'lmp' ? 'First Day of Last Period' : 'Estimated Conception Date'}
                                </label>
                                <input type="date" value={inputDate} onChange={e => setInputDate(e.target.value)} className="w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition-all" />
                            </div>
                            <button onClick={handleCalculate} className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
                                Calculate My Due Date
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    {results ? (
                        <div className="bg-white border border-brand-border p-8 rounded-xl shadow-sm space-y-6 fade-in relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-pink via-purple-300 to-blue-300"></div>
                            <div className="text-center">
                                <p className="text-brand-text-body font-medium uppercase tracking-wide text-xs mb-1">Estimated Due Date</p>
                                <p className="text-5xl font-serif font-bold text-brand-pink mb-2">{results.dueDate}</p>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink/10 rounded-full text-brand-pink text-sm font-bold">
                                    <HeartPulseIcon className="w-4 h-4" />
                                    {results.currentWeek} Weeks, {results.currentDay} Days
                                </div>
                            </div>

                            {/* Trimester Timeline */}
                            <div className="relative pt-6 pb-2">
                                <div className="flex text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider justify-between px-1">
                                    <span>Trimester 1</span>
                                    <span>Trimester 2</span>
                                    <span>Trimester 3</span>
                                </div>
                                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-pink-300/30 border-r border-white" style={{ width: '33%' }}></div>
                                    <div className="h-full bg-purple-300/30 border-r border-white" style={{ width: '33%' }}></div>
                                    <div className="h-full bg-blue-300/30" style={{ width: '34%' }}></div>
                                </div>
                                {/* Progress Marker */}
                                <div
                                    className="absolute top-8 w-4 h-4 bg-brand-pink border-2 border-white rounded-full shadow-md transform -translate-x-1/2 transition-all duration-1000 ease-out"
                                    style={{ left: `${Math.min(Math.max(progress, 0), 100)}%` }}
                                ></div>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 text-sm">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center hover:border-brand-pink/30 transition-colors">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Conception</p>
                                    <p className="font-bold text-gray-800">{results.conception}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center hover:border-brand-pink/30 transition-colors">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Trimester 2 Starts</p>
                                    <p className="font-bold text-gray-800">{results.trimester1End}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center hover:border-brand-pink/30 transition-colors">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Trimester 3 Starts</p>
                                    <p className="font-bold text-gray-800">{results.trimester2End}</p>
                                </div>
                            </div>

                            <div className="text-center pt-2">
                                <button onClick={handleCopy} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pink-dark transition-colors">
                                    {copied ? <CheckCircleIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
                                    {copied ? 'Milestones Copied!' : 'Copy Milestones'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white border border-brand-border p-8 rounded-xl shadow-sm text-center flex flex-col justify-center items-center h-full min-h-[300px]">
                            <div className="w-16 h-16 bg-brand-pink-light rounded-full flex items-center justify-center mb-4">
                                <HeartPulseIcon className="w-8 h-8 text-brand-pink" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text-title mb-2">Ready to see your timeline?</h3>
                            <p className="text-brand-text-body/70 max-w-xs mx-auto">Enter your dates to reveal your estimated due date and a personalized pregnancy timeline.</p>
                        </div>
                    )}
                </div>
            </div>

            {results && weeklyData && selectedWeek && (
                <div className="mt-12 pt-8 border-t border-brand-border fade-in">
                    <h2 className="font-serif text-3xl font-bold text-brand-text-title mb-2 text-center">Your Baby Week by Week</h2>
                    <p className="text-center text-brand-text-body/70 mb-8 max-w-2xl mx-auto">Slide to explore how your baby grows and develops throughout your pregnancy.</p>

                    <div className="mb-8 max-w-3xl mx-auto px-4">
                        <div className="relative mb-6">
                            <input
                                id="weekSlider"
                                type="range"
                                min="1"
                                max="40"
                                value={selectedWeek}
                                onChange={(e) => setSelectedWeek(Number(e.target.value))}
                                className="w-full h-4 rounded-full appearance-none cursor-pointer bg-brand-pink-light accent-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                            />
                            <div className="flex justify-between text-xs font-bold text-brand-text-body/40 mt-2">
                                <span>Week 1</span>
                                <span>Week 10</span>
                                <span>Week 20</span>
                                <span>Week 30</span>
                                <span>Week 40</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-brand-border shadow-lg overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-brand-pink text-white p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/10 opacity-50 pattern-dots"></div>
                                <div className="relative z-10">
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1 block">Week</span>
                                    <span className="text-6xl font-serif font-bold leading-none">{selectedWeek}</span>
                                    <div className="mt-4 pt-4 border-t border-white/20 w-full">
                                        <p className="text-sm font-medium opacity-90 mb-1">Baby is the size of a</p>
                                        <p className="text-xl font-bold">{weeklyData.size}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8 flex flex-col justify-center">
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <span className="text-xs text-gray-500 uppercase font-bold block mb-1">Length</span>
                                        <span className="text-lg font-bold text-brand-text-title">{weeklyData.length}</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <span className="text-xs text-gray-500 uppercase font-bold block mb-1">Weight</span>
                                        <span className="text-lg font-bold text-brand-text-title">{weeklyData.weight}</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-text-title mb-2 flex items-center gap-2">
                                        <InfoIcon className="w-4 h-4 text-brand-pink" />
                                        Development Highlights
                                    </h4>
                                    <p className="text-brand-text-body leading-relaxed">{weeklyData.development}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-12 space-y-8">
                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-pink/10 rounded-lg">
                            <InfoIcon className="w-6 h-6 text-brand-pink" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-brand-text-title">How to Use This Pregnancy Calculator</h3>
                    </div>
                    <div className="prose max-w-none text-brand-text-body/80 text-sm leading-relaxed">
                        <p>
                            This tool helps you estimate your due date and track your baby's development.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Choose Method:</strong> Select "Last Period" (most common) or "Conception Date" if you know exactly when you conceived.</li>
                            <li><strong>Enter Date:</strong> Input the first day of your last period or your conception date.</li>
                            <li><strong>Explore:</strong> View your estimated due date, current progress, and a week-by-week guide to your baby's growth.</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl border border-brand-border p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>How accurate is this due date?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                This calculator uses Naegele's Rule, the standard method used by doctors. However, only about 5% of babies are born on their exact due date. Most are born within two weeks before or after.
                            </div>
                        </details>
                        <details className="group border border-brand-border/50 rounded-lg bg-gray-50/50 open:bg-white transition-colors">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-brand-text-title list-none">
                                <span>What if my cycle isn't 28 days?</span>
                                <span className="accordion-arrow text-brand-pink transition-transform duration-200 group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 text-sm text-brand-text-body/80 leading-relaxed">
                                This calculator assumes a standard 28-day cycle. If your cycle is significantly longer or shorter, your actual due date might differ slightly. An early ultrasound is the most accurate way to date a pregnancy.
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border text-center">
                <p className="text-xs text-brand-text-body/70 max-w-2xl mx-auto">
                    <InfoIcon className="w-4 h-4 inline-block mr-1" />
                    Disclaimer: This calculator provides an estimate based on standard assumptions. Fetal measurements are averages and can vary. Please consult with a healthcare provider for accurate medical advice.
                </p>
            </div>
        </ToolContainer>
    );
};
