import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ProjectCard from '../components/ProjectCard'

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
}
export default meta

type Story = StoryObj<typeof ProjectCard>

export const WithLiveUrl: Story = {
  args: {
    name: 'Starva',
    description:
      'Full-stack Strava analytics app with Next.js, GraphQL, and MongoDB. 27 Storybook stories with Chromatic visual regression in CI.',
    tech: ['Next.js 16', 'Apollo', 'GraphQL', 'MongoDB', 'Strava OAuth'],
    liveUrl: 'https://starvingstarva.vercel.app',
    repoUrl: 'https://github.com/jbelleza29/starva',
  },
}

export const RepoOnly: Story = {
  args: {
    name: 'clipforge',
    description: 'Video clip management and processing tool.',
    tech: ['TypeScript', 'React'],
    repoUrl: 'https://github.com/jbelleza29/clipforge',
  },
}
