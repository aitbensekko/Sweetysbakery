-- Create a table for public user profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  full_name text,
  is_premium boolean default false,
  subscription_status text default 'free', -- 'active', 'past_due', 'canceled', 'free'
  lemon_squeezy_customer_id text,
  updated_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Function to handle new user signup automatically
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

-- Trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Recipe Ratings Table
create table recipe_ratings (
  id uuid default gen_random_uuid() primary key,
  slug text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  ip_address text, -- For basic abuse prevention
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS for recipe_ratings
alter table recipe_ratings enable row level security;

-- Policy: Everyone can read ratings
create policy "Ratings are public"
  on recipe_ratings for select
  using ( true );

-- Policy: Everyone can insert ratings (with IP check ideally in backend, but open here)
create policy "Anyone can rate"
  on recipe_ratings for insert
  with check ( true );

-- Create an index for faster lookups by slug
create index idx_recipe_ratings_slug on recipe_ratings(slug);

