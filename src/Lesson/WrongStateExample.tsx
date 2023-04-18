export const WrongStateExample = () => {
  let value = "Hello";
  const onClick = () => {
    value = "Bye";
    console.log("🚀 ~ file: Lesson.tsx:7 ~ onClick ~ value:", value);
  };

  return <button onClick={onClick}>{value}</button>;
};
