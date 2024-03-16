import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes, PropsWithChildren } from 'react';

const headingVariants = cva('scroll-m-20 tracking-tight', {
  variants: {
    level: {
      1: 'text-4xl lg:text-5xl0 font-extrabold',
      2: 'text-3xl font-semibold first:mt-0',
      3: 'text-2xl font-semibold',
      4: 'text-xl font-semibold',
    },
  },
  defaultVariants: {
    level: 1,
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

const Heading = ({
  className,
  level,
  children,
  ...props
}: PropsWithChildren<HeadingProps>) => {
  return (
    <h1 className={headingVariants({ level, className })} {...props}>
      {children}
    </h1>
  );
};

Heading.displayName = 'Heading';

export { Heading, headingVariants };
