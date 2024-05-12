import { FC, ReactNode } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Text from './Text';

type MDXComponentProps = {
  source: string;
};

const components = {
  p: (props: { children: ReactNode }) => (
    <Text as='p' className='whitespace-pre-wrap' {...props}>
      {props.children}
    </Text>
  ),
  a: (props: { children: ReactNode }) => (
    <a {...props} className='text-blue'>
      {props.children}
    </a>
  ),
};
const MDXComponent: FC<MDXComponentProps> = ({ source }) => {
  return (
    <div>
      <MDXRemote source={source} components={components} />
    </div>
  );
};

export default MDXComponent;
