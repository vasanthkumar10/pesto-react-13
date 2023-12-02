function Welcome(props) {
  // props -> properties
  //   Whenever you want JS data inside HTML -> use {}
  console.log(props);
  return (
    <div>
      <h1>
        Welcome - {props.name} - {props.age}
      </h1>
      <h1>Welcome to Pesto</h1>
    </div>
  );
}

export default Welcome;

// stateless component
