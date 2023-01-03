import Link from "next/link";
import Users from "./Users";
import AddCount from "./IncrementCounter";

const Page = (props) => {
  return (
    <div>
      <h1 style={{backgroundColor: "#ddd"}}>{props.title}</h1>
      <Users/>
      <AddCount />
      <br/>
      <div>
        <Link href={props.linkTo}>
          <p>Navigate</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
