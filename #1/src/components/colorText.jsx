export const ColorText = (props) => {
  const contentStyle = {
    color:props.color
  }

  console.log(props);

  return (
    <h1 style={contentStyle}>{props.message}</h1>
  )

}