export default function Item(props) {
  const {name, quantity, price, index} = props;

  return (
    <tr className="d-flex" key={index+"tr"}>
      <td key={index+"name"} className="col-6 p-3">{name ? name : ''}</td>
      <td key={index+"quantity"} className="col-3 p-3 text-end">{quantity ? quantity : 0}</td>
      <td key={index+"price"} className="col-3 p-3 text-end">{price ? price : 0}</td>
    </tr>
  );
}