const Donor = (props) => {
  console.log(props);
  const { name, blood, phone, upazila, zila, division } = props.donor;
  console.log(name);
  return (
    <tr>
      <th scope="row">{props.id + 1}</th>
      <td>{name}</td>
      <td>{blood}</td>
      <td>{phone}</td>
      <td>{`${upazila}, ${zila}, ${division}`}</td>
    </tr>
  );
};

export default Donor;
