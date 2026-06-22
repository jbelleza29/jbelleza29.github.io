import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ProjectsGrid from '../components/ProjectsGrid'

const meta: Meta<typeof ProjectsGrid> = {
  title: 'Components/ProjectsGrid',
  component: ProjectsGrid,
}
export default meta

type Story = StoryObj<typeof ProjectsGrid>

export const Default: Story = {}
