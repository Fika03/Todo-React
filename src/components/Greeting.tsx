interface IGreetingProps {
  message: string;
  age: number;
}

export const Greeting = ({ message }: IGreetingProps) => {
  return <h2>{message}</h2>;
};
