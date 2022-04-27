/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardTitle from "../CardTitle";
// import { useRouter } from "next/router";
import Link from "next/link";
export default function CardEvent({ data, title, subTitle }) {
  // const router = useRouter();
  return (
    <section className="grow-today">
      <div className="container">
        <CardTitle title={title} subTitle={subTitle} />
        <div className="mt-5 row gap">
          {/* {[" ", " ", " ", " "].map((data, index) => { */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card-grow h-100">
              <span className="badge-pricing">$229</span>
              <img src="/images/card-1.png" alt="semina" />
              <div className="card-content">
                <div className="card-title">
                  Learn Jira for Sprint Design Venture
                </div>
                <div className="card-subtitle">Product Design</div>
                <div className="description">Bandung, 22 Jan 2022</div>
                <Link href={`/detail/${1}`}>
                  <a className="stretched-link"></a>
                </Link>
              </div>
            </div>
          </div>
          {/* })} */}
        </div>
      </div>
    </section>
  );
}
