import styles from "./moreText.module.css";
import type { Meta, StoryObj } from "@storybook/react";

const Button = () => {
  return (
    <a className={styles.wrapper} href="">
      <p>More</p>
      <div>{">"}</div>
    </a>
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
