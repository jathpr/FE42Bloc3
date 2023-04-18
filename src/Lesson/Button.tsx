export const Button = ({
  disabled2,
  arr,
}: {
  disabled2?: boolean;
  arr?: string[];
}) => <button disabled={disabled2}>{arr?.map((el) => el)}</button>;

const App = () => {
  const enabled = Math.random() < 0.5 ? true : false;
  return (
    <div>
      <Button disabled2={!enabled} />
    </div>
  );
};
