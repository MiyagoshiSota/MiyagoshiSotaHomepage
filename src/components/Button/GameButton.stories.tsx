import styles from "./gameButton.module.css";
import type { Meta, StoryObj } from "@storybook/react";

const Button = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p>boom</p>
      </div>
    </div>
  );
};

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

export const Primary: Story = {
  render: () => <button>hello</button>,
};

export const Hover: Story = {
  render: () => <Button />,
};

export const Disable: Story = {
  render: () => <Button />,
};
