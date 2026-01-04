import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import CTABanner from '@/components/CTABanner'
import NewsletterForm from '@/components/NewsletterForm'

/* TODO: In production, fetch posts from a CMS or filesystem */
const posts: Record<string, BlogPost> = {
  'signs-ready-for-career-change': {
    slug: 'signs-ready-for-career-change',
    title: "7 Signs You're Ready for a Career Change (Even If It Scares You)",
    excerpt:
      "Feeling restless in your role? Wondering if there's something more? Here are seven signs that it might be time for a change.",
    category: 'Career Transitions',
    readingTime: '6 min read',
    date: '2024-01-15',
    author: 'Margarita Dautova',
    content: `
## The restlessness you can't shake

You've built a successful career. By most measures, you're doing well. And yet, something feels off. There's a persistent hum of dissatisfaction that won't go away, no matter how many achievements you stack up.

If this sounds familiar, you're not alone. In my years of coaching professionals through career transitions, I've seen this pattern countless times. The good news? That restlessness is trying to tell you something important.

Here are seven signs that you might be ready for a change — and why listening to them could be the best career decision you make.

## 1. Sunday nights fill you with dread

We all have moments where we'd rather not go to work. But if you consistently feel a heavy sense of dread as the weekend ends, that's more than normal work fatigue. 

Pay attention to the physical sensations: Does your stomach tighten? Does your mood noticeably shift? Your body often knows before your mind is ready to admit it.

**Reflection question:** On a scale of 1-10, how do you typically feel on Sunday evening about the week ahead?

## 2. You've stopped learning and growing

Remember when work felt exciting because you were constantly learning new things? If you now feel like you're on autopilot — going through the motions without any sense of growth — that's a significant warning sign.

Human beings are wired for development. When we stop growing, we start withering. This doesn't mean you need constant promotions, but you do need opportunities to expand your capabilities and perspectives.

## 3. Your values no longer align with your work

As we evolve, our values often shift. What mattered in your twenties might not matter in your forties. Maybe you once prioritized status and salary, but now crave meaning and flexibility.

When your work conflicts with your core values, it creates a constant internal friction that's exhausting to maintain.

**Consider this:** What are your top 3-5 values today? How well does your current work align with them?

## 4. You're envious of people who've made changes

Notice when you feel a pang of envy hearing about someone who's pivoted careers, started something new, or taken a risk. That envy is information — it's pointing toward something you want but haven't allowed yourself to pursue.

## 5. You're only motivated by external rewards

If the only thing keeping you going is the paycheck, the bonus, or the title, that's a sign of depleted intrinsic motivation. While external rewards matter, they're not enough to sustain fulfillment over the long term.

When work is genuinely meaningful to us, we're driven by the work itself — not just what we get for doing it.

## 6. You've been playing "what if" for years

Everyone daydreams occasionally. But if you've been consistently fantasizing about different paths — for months or years — it's time to take those thoughts seriously.

The "what ifs" that persist are usually pointing toward genuine possibilities worth exploring.

## 7. Your gut keeps telling you something needs to change

Intuition is underrated in career decisions. If you have a persistent inner voice suggesting that something isn't right, don't dismiss it. That voice has access to wisdom your analytical mind might be ignoring.

## So you recognize yourself in these signs. Now what?

First, know that feeling ready for change doesn't mean you have to make a dramatic leap tomorrow. Career transitions are usually more of a journey than a single decision.

Here's what I recommend:

1. **Get curious, not judgmental.** Don't shame yourself for these feelings. Approach them with genuine curiosity.

2. **Start exploring.** Have conversations. Read. Research. What draws your interest?

3. **Identify what's actually working.** Not everything needs to change. What do you want to keep?

4. **Get support.** Whether it's a coach, mentor, or trusted friend, don't navigate this alone.

5. **Take small experiments.** You don't need to have everything figured out. What small step could you take this week?

## The fear is normal — but don't let it decide for you

Yes, change is scary. Yes, you have bills to pay. Yes, there's risk involved. But staying in the wrong place has costs too — costs to your energy, your health, your relationships, and your potential.

The professionals I coach who successfully navigate career transitions don't do so because they have no fear. They do it because they choose growth despite the fear.

If you're ready to explore what's next for your career, I'm here to help. Book a free discovery call and let's talk about where you are and where you might go.

---

*This article was originally published on the Margarita Dautova Coaching blog. For more insights on career development and leadership, subscribe to the newsletter.*
    `,
  },
  'first-90-days-leadership-role': {
    slug: 'first-90-days-leadership-role',
    title: 'The First 90 Days in a Leadership Role: A Strategic Playbook',
    excerpt:
      "The first three months in a new leadership position are critical. Here's a practical framework for success.",
    category: 'Leadership',
    readingTime: '8 min read',
    date: '2024-01-08',
    author: 'Margarita Dautova',
    content: `
## Why the first 90 days matter so much

You've landed a new leadership role. Congratulations! Now comes the part that actually determines your success: the first 90 days.

Research consistently shows that the impressions formed in this early period have a disproportionate impact on how you're perceived throughout your tenure. Get it right, and you build a foundation of credibility and trust. Get it wrong, and you'll spend months — or years — trying to recover.

Here's a strategic playbook for making the most of this critical window.

## Phase 1: Days 1-30 — Learn before you lead

The biggest mistake new leaders make? Moving too fast to "prove themselves" before understanding the landscape.

### Your primary goals in month one:

**Listen more than you speak.** Schedule 1:1s with every direct report and key stakeholder. Come with questions, not answers. What's working well? What's frustrating? What should I know that isn't obvious?

**Map the landscape.** Who are the informal influencers? What are the unwritten rules? What projects are in flight? What's the history I need to understand?

**Identify quick wins — but don't act yet.** Note problems that seem solvable, but resist the urge to fix them immediately. You don't have full context yet.

**Build relationships intentionally.** Invest time in getting to know people as humans, not just roles. Trust built early compounds over time.

### Watch out for:
- Making promises you can't keep
- Criticizing the previous leader or how things were done
- Announcing changes before you understand the implications

## Phase 2: Days 31-60 — Synthesize and strategize

Now you have data. Time to make sense of it.

### Focus on:

**Synthesize your learnings.** What patterns emerged from your conversations? Where are the biggest opportunities? The biggest risks?

**Clarify your leadership thesis.** Based on what you've learned, what do you believe needs to happen? What's your point of view on the path forward?

**Test your thinking.** Share your emerging perspective with trusted advisors. What are you missing? What pushback do you need to consider?

**Begin building your team.** By now you should have a clearer sense of team strengths and gaps. What development is needed? Are there hiring priorities?

**Select your early wins.** Choose 2-3 visible improvements you can deliver that align with organizational priorities and build credibility.

### Critical conversations to have:
- Alignment with your boss on expectations and success metrics
- Clarity with peers on how you'll work together
- Honesty with your team about what you've learned and what's ahead

## Phase 3: Days 61-90 — Execute and establish

Now it's time to move from observation to action.

### Key actions:

**Deliver on early wins.** Execute on the quick wins you identified. Visible progress builds momentum and credibility.

**Communicate your vision.** Share where you're headed and why. People follow leaders who paint a compelling picture of the future.

**Establish your operating rhythm.** What meetings will you hold? How will you make decisions? How will you stay connected to the front lines?

**Set clear expectations.** Make sure your team understands what success looks like and how they'll be measured.

**Build your leadership brand.** By 90 days, people should have a clear sense of who you are as a leader and what you stand for.

## The hidden dimension: Managing yourself

Throughout all three phases, don't forget to manage your own experience.

**Protect your energy.** The first 90 days are demanding. Build in recovery time.

**Process your emotions.** You'll likely feel a range of things — excitement, doubt, frustration, hope. That's normal.

**Seek support.** Whether it's a coach, mentor, or peer group, have somewhere to think out loud.

**Stay patient.** Real change takes time. Don't expect yourself to have transformed everything by day 90.

## Your 90-day success metrics

At the end of 90 days, ask yourself:

- Do I understand this organization and role deeply?
- Do key stakeholders trust and respect me?
- Does my team feel clarity about our direction?
- Have I delivered visible early progress?
- Am I set up for long-term success?

If you can answer yes to most of these, you're on the right track.

## Final thought

The first 90 days aren't about proving you have all the answers. They're about demonstrating that you're the right person to find them. Lead with curiosity, move with intention, and remember that how you start shapes everything that follows.

---

*Need support navigating a leadership transition? I offer coaching specifically designed for the first 90 days and beyond. Book a discovery call to learn more.*
    `,
  },
  'overcoming-imposter-syndrome-executives': {
    slug: 'overcoming-imposter-syndrome-executives',
    title: 'Overcoming Imposter Syndrome: A Guide for High-Achievers',
    excerpt:
      "That voice telling you you're not good enough? It affects even the most successful leaders. Here's how to move past it.",
    category: 'Mindset',
    readingTime: '7 min read',
    date: '2024-01-02',
    author: 'Margarita Dautova',
    content: `
## The secret successful people don't talk about

Here's something that might surprise you: that voice in your head telling you you're not really qualified, that you've fooled everyone, that it's only a matter of time before you're "found out"? Some of the most accomplished people in the world hear that same voice.

Imposter syndrome — the persistent feeling of being a fraud despite evidence of competence — is remarkably common among high achievers. Studies suggest that up to 70% of people experience it at some point.

As a coach working with executives and leaders, I see imposter syndrome constantly. And I've learned that the way most people try to deal with it doesn't work.

Let's talk about what does.

## First, understand what imposter syndrome actually is

Imposter syndrome isn't a character flaw or a sign that you're actually incompetent. It's a psychological pattern that often develops in people who:

- Grew up in environments where achievement was highly valued
- Are first-generation professionals or from underrepresented groups
- Have recently stepped into new or bigger roles
- Are perfectionists with high standards

In other words, imposter syndrome often correlates with being driven, thoughtful, and capable — not the opposite.

## Why the usual advice doesn't work

Most guidance on imposter syndrome tells you to "fake it till you make it" or "just believe in yourself more." This advice misses the point.

You can't think your way out of a feeling. And forcing confidence often makes the inner critic louder.

What works instead is a combination of understanding, reframing, and strategic action.

## A better approach: Three strategies that actually help

### 1. Separate feelings from facts

Imposter syndrome is fundamentally a feeling — a powerful one, but still a feeling. The key is to stop treating this feeling as evidence of reality.

**Try this:** When the imposter voice speaks up, practice labeling it: "That's the imposter feeling." Then ask yourself: "What would I tell a friend or colleague in my position? What does the evidence actually show?"

This creates distance between you and the thought, making it easier to evaluate objectively.

### 2. Normalize the experience

One of the most powerful antidotes to imposter syndrome is realizing you're not alone. When you discover that successful people you admire have the same feelings, it reframes imposter syndrome from "proof I'm a fraud" to "a common experience among achievers."

**Try this:** Have honest conversations with mentors, peers, or a coach about self-doubt. You'll likely find that people you deeply respect share similar experiences.

### 3. Focus on contribution, not evaluation

Imposter syndrome intensifies when we're focused on how we're being judged. It quiets when we focus outward — on the value we're creating and the people we're serving.

**Try this:** Before a meeting or presentation where you might feel like an imposter, shift your focus: "What do the people in this room need? How can I help?" This moves attention from self-evaluation to contribution.

## The counterintuitive truth about imposter syndrome

Here's something most people don't realize: imposter syndrome never fully goes away. In fact, it often intensifies the more successful you become, because the stakes keep rising.

The goal isn't to eliminate the feeling. It's to change your relationship with it.

High achievers who thrive don't succeed because they never feel like imposters. They succeed because they've learned to take action despite those feelings. They've made peace with the gap between how they feel and what they're capable of.

## Practical exercises for the imposter voice

**Create an "evidence file."** Compile concrete proof of your competence — accomplishments, positive feedback, problems you've solved. Review it when the imposter voice gets loud.

**Interview your imposter.** When the critical voice appears, ask it questions: "What are you trying to protect me from? What do you need me to know?" Often, the imposter is actually trying to keep you safe — just in an unhelpful way.

**Talk about it.** Shame thrives in secrecy. Naming your imposter feelings — to a coach, therapist, or trusted peer — reduces their power.

**Take imperfect action.** The more you wait to feel "ready" or "confident," the more power you give to the imposter voice. Taking action before you feel ready builds real confidence.

## When imposter syndrome signals something real

In rare cases, imposter syndrome is pointing toward a genuine skill gap or misalignment. If you consistently feel underqualified in a role, it's worth asking: "Is there actual development I need? Is this truly the right fit?"

But in most cases, imposter syndrome is not evidence that you're in the wrong place — it's evidence that you're in a growth zone.

## Final thoughts: The imposter paradox

There's a wonderful irony at the heart of imposter syndrome: the people most worried about being frauds are usually the least likely to actually be frauds. True frauds don't tend to question themselves this much.

Your imposter voice, in some ways, is a sign of your conscientiousness, your standards, your desire to do good work. The goal isn't to silence it completely — it's to stop letting it run your decisions.

You belong in the rooms you're in. You earned your seat at the table. And the people around you see something real — even when your inner critic doesn't.

---

*Imposter syndrome is one of the most common challenges I work on with coaching clients. If you're ready to quiet your inner critic and step more fully into your leadership, let's talk.*
    `,
  },
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readingTime: string
  date: string
  author: string
  content: string
}

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-primary-50 to-white">
        <Container size="narrow">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>

          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="text-primary-600 font-medium">{post.category}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <h1 className="font-serif text-display md:text-display-lg text-neutral-900 text-balance">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
              {/* TODO: Add author photo */}
              <span className="text-primary-600 font-medium">MD</span>
            </div>
            <div>
              <p className="font-medium text-neutral-900">{post.author}</p>
              <p className="text-sm text-neutral-500">Executive Coach</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <Section background="white" size="sm">
        <Container size="narrow">
          <article className="prose prose-neutral prose-lg max-w-none prose-headings:font-serif prose-headings:text-neutral-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:not-italic">
            {/* Render markdown content */}
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="mt-10 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="mt-8 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-medium">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                )
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter((line) => line.startsWith('- '))
                return (
                  <ul key={index} className="list-disc pl-6">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.startsWith('---')) {
                return <hr key={index} className="my-8 border-neutral-200" />
              }
              if (paragraph.trim()) {
                // Handle inline bold text
                const formattedText = paragraph.split(/(\*\*.*?\*\*)/).map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>
                  }
                  return part
                })
                return <p key={index}>{formattedText}</p>
              }
              return null
            })}
          </article>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-primary-600 font-medium text-lg">MD</span>
              </div>
              <div>
                <p className="font-serif text-xl text-neutral-900">About the author</p>
                <p className="mt-2 text-neutral-600">
                  {/* TODO: Replace with actual author bio */}
                  Margarita Dautova is an executive coach helping ambitious professionals navigate 
                  career transitions and leadership challenges. She works with clients globally, 
                  combining evidence-based methods with deep human insight.
                </p>
                <Button href="/about" variant="ghost" className="mt-3 -ml-4">
                  Learn more about Margarita →
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 p-8 bg-primary-50 rounded-sm">
            <h3 className="font-serif text-xl text-neutral-900">
              Enjoyed this article?
            </h3>
            <p className="mt-2 text-neutral-600">
              Get more insights on leadership, career development, and professional growth 
              delivered to your inbox.
            </p>
            <div className="mt-4">
              <NewsletterForm variant="inline" />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to take action?"
        description="If this article resonated with you, let's explore how coaching can help you move forward."
        primaryCTA={{ text: 'Book a discovery call', href: '/book' }}
        variant="dark"
      />
    </>
  )
}

