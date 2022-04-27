import React, { useEffect } from "react";
import { useRouter } from "next/router";
function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.back(); //kembali ke router sebelumnya
      // router.push("/"); //mengarahkan router ke tempat kita kehendaki
    }, 2000);
  }, []);

  return <div>PageNotFound</div>;
}

export default PageNotFound;
