# 🎙️ Converso - AI-Powered Voice Learning Platform

> **⚠️ Disclaimer**: This project is built as a **portfolio showcase** to demonstrate modern full-stack development skills and is **not intended for actual commercial SaaS purposes**. It serves as a comprehensive example of AI integration, voice technology, and modern web application architecture.

**Converso** is an innovative Learning Management System (LMS) that revolutionizes education through AI-powered voice conversations. Students can create personalized AI tutoring companions and engage in real-time voice sessions to learn various subjects in a natural, conversational manner.

![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e?style=flat-square&logo=supabase)
![VAPI](https://img.shields.io/badge/VAPI-Voice%20AI-ff6b6b?style=flat-square)

## ✨ Key Features

### 🎯 Core Functionality

- **AI Voice Tutoring**: Real-time voice conversations with GPT-4 powered AI tutors
- **Personalized Companions**: Create custom learning companions with specific names, voices, and teaching styles
- **Multi-Subject Support**: Mathematics, Language, Science, History, Coding, and Economics
- **Dynamic Voice Selection**: Choose between male/female voices with casual/formal conversation styles
- **Real-time Transcription**: Live conversation transcripts with speech-to-text powered by Deepgram

### 🎨 Interactive Learning Experience

- **Visual Feedback**: Animated Lottie soundwave visualizations during conversations
- **Subject-Themed UI**: Color-coded interface based on learning subjects
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Intuitive Controls**: Easy-to-use microphone controls and session management

### 📊 Learning Analytics & Progress

- **Session History**: Track completed learning sessions and progress
- **Personal Dashboard**: "My Journey" page with learning statistics and companion management
- **Lesson Tracking**: Monitor time spent on different topics and subjects
- **Recent Sessions**: Quick access to recently completed learning sessions

### 🔐 Authentication & User Management

- **Clerk Integration**: Secure authentication with social login support
- **User Profiles**: Personalized profiles with learning progress tracking
- **Access Control**: Protected routes and user-specific content management

### 💳 Subscription Management

- **Tiered Access**: Free tier with companion limits, premium plans for unlimited access
- **Clerk Pricing Integration**: Built-in subscription management with pricing tables
- **Usage Limits**: Smart companion creation limits based on subscription tier
- **Upgrade Prompts**: Seamless upgrade flow when limits are reached

### 🎵 Advanced Voice Technology

- **VAPI Integration**: Professional voice AI platform for natural conversations
- **ElevenLabs Voices**: High-quality voice synthesis with multiple voice options
- **GPT-4 Backend**: Advanced AI tutoring with context-aware responses
- **Real-time Communication**: Low-latency voice interactions with live feedback

## 🛠️ Technical Architecture

### Frontend Stack

- **Framework**: Next.js 15.4.1 with App Router and React 19
- **Language**: TypeScript 5.0 for complete type safety
- **Styling**: Tailwind CSS 4.0 with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Forms**: React Hook Form with Zod validation
- **Animations**: Lottie React for interactive visual feedback
- **Font**: Bricolage Grotesque for modern typography

### Backend & Database

- **API**: Next.js API Routes with server actions
- **Database**: PostgreSQL via Supabase with real-time capabilities
- **ORM**: Supabase client with TypeScript integration
- **Authentication**: Clerk with JWT tokens and user management
- **File Storage**: Supabase storage for assets and user content

### AI & Voice Technology

- **Voice AI**: VAPI for real-time voice conversations
- **Speech Recognition**: Deepgram Nova-3 for accurate transcription
- **Voice Synthesis**: ElevenLabs with multiple voice personalities
- **AI Model**: OpenAI GPT-4 for intelligent tutoring responses
- **Voice Controls**: Real-time mute/unmute and session management

### DevOps & Monitoring

- **Deployment**: Vercel with automatic deployments
- **Error Tracking**: Sentry for comprehensive error monitoring
- **Performance**: Built-in performance monitoring and diagnostics
- **Development**: Turbopack for fast development builds
- **Code Quality**: ESLint and TypeScript strict mode

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Supabase account and project
- Clerk account for authentication
- VAPI account for voice AI
- Sentry account for monitoring

### Environment Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/converso-lms.git
cd converso-lms
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment variables**
   Create a `.env.local` file with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# VAPI Voice AI
NEXT_PUBLIC_VAPI_WEB_TOKEN="your-vapi-token"

# Sentry Monitoring
SENTRY_DSN="your-sentry-dsn"
```

4. **Database setup**
   Set up your Supabase database with the required tables:

```sql
-- Companions table
CREATE TABLE companions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    subject TEXT NOT NULL,
    topic TEXT NOT NULL,
    voice TEXT NOT NULL,
    style TEXT NOT NULL,
    duration INTEGER NOT NULL,
    author TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Session history table
CREATE TABLE session_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    companion_id UUID REFERENCES companions(id),
    user_id TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

5. **Start development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── companions/        # Companion management pages
│   │   ├── [id]/         # Individual companion sessions
│   │   └── new/          # Companion creation
│   ├── my-journey/       # User dashboard and progress
│   ├── subscription/     # Pricing and subscription management
│   └── sign-in/          # Authentication pages
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui base components
│   ├── Companion.tsx     # Main voice session component
│   ├── CompanionForm.tsx # Companion creation form
│   └── Navbar.tsx        # Navigation component
├── constants/            # Static data and configurations
├── lib/                  # Utility functions and integrations
│   ├── actions/          # Server actions for data operations
│   ├── supabase/         # Database client configuration
│   ├── utils.ts          # Utility functions
│   └── vapi.sdk.ts       # VAPI voice AI integration
├── types/                # TypeScript type definitions
│   ├── index.d.ts        # General type definitions
│   └── vapi.d.ts         # VAPI-specific types
└── middleware.ts         # Clerk authentication middleware
```

## 🧪 Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack

# Building
npm run build           # Create production build
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint for code quality checks
```

## 🔧 Key Implementation Highlights

### AI Voice Conversation System

The core feature leverages VAPI's voice AI platform for natural tutoring conversations:

```typescript
const vapiAssistant: CreateAssistantDTO = {
  name: "Companion",
  firstMessage:
    "Hello, let's start the session. Today we'll be talking about {{topic}}.",
  transcriber: {
    provider: "deepgram",
    model: "nova-3",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: voiceId,
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 1,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a highly knowledgeable tutor teaching a real-time voice session...`,
      },
    ],
  },
};
```

### Real-time Session Management

Dynamic session handling with live transcription and visual feedback:

```typescript
useEffect(() => {
  const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
  const onCallEnd = () => {
    setCallStatus(CallStatus.FINISHED);
    addToSessionHistory(companionId);
  };
  const onMessage = (message: Message) => {
    if (message.type === "transcript" && message.transcriptType === "final") {
      const newMessage = { role: message.role, content: message.transcript };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    }
  };

  vapi.on("call-start", onCallStart);
  vapi.on("call-end", onCallEnd);
  vapi.on("message", onMessage);
}, [companionId]);
```

### Subscription-based Access Control

Smart permission system based on Clerk subscription plans:

```typescript
export const newCompanionPermissions = async () => {
  const { userId, has } = await auth();

  if (has({ plan: "pro" })) {
    return true;
  } else if (has({ feature: "3_companion_limit" })) {
    limit = 3;
  } else if (has({ feature: "10_companion_limit" })) {
    limit = 10;
  }

  const companionCount = await getCompanionCount(userId);
  return companionCount < limit;
};
```

### Type-Safe Database Operations

Supabase integration with TypeScript for data consistency:

```typescript
export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error || !data) {
    throw new Error(error.message || "Failed to create a companion");
  }

  return data[0];
};
```

## 🎨 Design System

The application features a comprehensive design system:

- **Color Palette**: Subject-specific color coding with semantic tokens
- **Typography**: Bricolage Grotesque font family for modern aesthetics
- **Components**: Consistent UI components with accessibility features
- **Animations**: Smooth transitions and Lottie animations for engagement
- **Responsive**: Mobile-first design with Tailwind CSS utilities

## 📈 Performance & Monitoring

- **Error Tracking**: Comprehensive Sentry integration for error monitoring
- **Performance Monitoring**: Built-in Next.js analytics and diagnostics
- **Real-time Updates**: Supabase real-time subscriptions for live data
- **Optimized Builds**: Turbopack for fast development iterations
- **Type Safety**: Full TypeScript coverage for runtime error prevention

## 🔄 AI Integration Features

### Voice Technology Stack

- **VAPI Platform**: Professional voice AI for educational conversations
- **Deepgram**: Advanced speech-to-text with Nova-3 model
- **ElevenLabs**: High-quality voice synthesis with personality options
- **GPT-4**: Intelligent tutoring responses with subject expertise

### Learning Personalization

- **Adaptive Teaching**: AI adjusts teaching style based on user preferences
- **Subject Expertise**: Specialized knowledge for different academic subjects
- **Conversation Flow**: Natural dialogue with educational guidance
- **Progress Tracking**: Session history and learning analytics

## 🤝 Contributing

This is a portfolio project showcasing modern development practices. Key learning areas include:

- Next.js 15 App Router patterns
- Real-time voice AI integration
- TypeScript best practices
- Supabase database design
- Authentication and authorization
- Subscription management
- Error monitoring and performance optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ as a demonstration of cutting-edge AI voice technology, modern web development, and educational innovation.**

_This application showcases expertise in React, Next.js, TypeScript, AI voice integration, real-time communication, subscription management, and modern SaaS architecture patterns._
