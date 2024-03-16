import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes, PropsWithChildren } from 'react';

const headingVariants = cva('scroll-m-20 tracking-tight', {
  variants: {
    level: {
      1: 'text-4xl lg:text-5xl0 font-extrabold mb-4',
      2: 'text-3xl font-semibold first:mt-0 mb-3',
      3: 'text-2xl font-semibold mb-2',
      4: 'text-xl font-semibold mb-1',
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
