import dynamic from "next/dynamic";

const NoSSR = (props) => {
  return <div>{props.children}</div>;
};

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
