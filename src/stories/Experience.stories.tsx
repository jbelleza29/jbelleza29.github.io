import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Experience from '../components/Experience'

const meta: Meta<typeof Experience> = {
  title: 'Components/Experience',
  component: Experience,
}
export default meta

type Story = StoryObj<typeof Experience>

export const Default: Story = {}
