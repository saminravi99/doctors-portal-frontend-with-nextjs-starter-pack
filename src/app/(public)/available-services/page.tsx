const AvailableServicePublic = async () => {
  const res = await fetch("http://localhost:5000/api/v1/available-services", {
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);
  return <div>AvailableServicePublic</div>;
};

export default AvailableServicePublic;
