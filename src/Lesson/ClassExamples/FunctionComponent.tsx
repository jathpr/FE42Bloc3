type Props = {
  children?: React.ReactNode;
  name?: string;
};

export const FunctionComponent = (props: Props) => (
  <div>
    <span>hello: {props.name}</span>
    <br />
    {props.children}
  </div>
);
