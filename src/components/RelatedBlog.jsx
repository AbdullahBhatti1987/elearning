import React from "react";
import { Link } from "react-router-dom";

function RelatedBlog() {
  return (
    <div className="bg-blue-100 w-full p-12">
      <div className="px-6 flex justify-between items-center">
        <h1>Related Blog</h1>
        <button className="darkText font-bold">See all</button>
      </div>
      <div className="flex w-full gap-16">
        <div className="cards w-1/2 flex flex-col bg-white p-8 gap-4 rounded-3xl">
          <img
            className="rounded-2xl"
            src="https://s3-alpha-sig.figma.com/img/e4c7/276a/25a9cc6960c67cafa4666142463a3cc6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4JNRW4pHi5ZXabYFaoEiaKUDjzRKu4p8nyzA7hr~e3f-GJ2aiOAgAkOamElyYjw-pKJngQrOdyvHymPJwzm8-QL~16Ce3ySjYOY00i4ES0jw41kA1xObSbkTxlAPigtInIJIJ9u6Z~l4vYGRzDejG2MNi~ITHmN9ocNzgtva9fHSM62UfmJU~VHk7bLFQeVjtut3mxGm7SLlz7aqrAhyZWN148pxhTikvE~R42Dnzang9P0rn-PQpR18PhpSuILrhNlifAlA3hVKO67qLu3jpz0qsLAV8I5tIYCpwH-Rh-nlY~2dpAcWy83BXUZqWHr9iycER8nbKwaX8-If6qHMQ__"
            alt=""
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl text-start">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>
            <div className="flex flex-row items-center gap-4">
              <img
                className="rounded-full w-12 h-12 bg-gray-200 object-top"
                src="https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mlkQsWWXGBK7BUsQj5p-0rwTOwk7mkBEvAENJxtWEd1hXIYMbdJpp9HjO~g5J8Ce2eWsdJYSAWbaFrRmH9ce4nINfTshi~QTnWBMLTB6ZW9XwsHBoNCmAwJMb96D1hsUxnis4Ts13LdDso3wt-We5cO4mnwVQE0P-e6D7nUyz6COhiY-sx0f7gJnpNa0XLnjlDnhRrAdTyWxv1ebJCAFatBckz6GyEVMx~b-UyKEKZQ6haToxNpReznuvSJk8PYo1tAdzwQgVxcNkALrB02Zt00tUZe6TR6sMMKDYlhfo~aWIiW59dzSan5YcH-lIgibsrRG3cD03MurGxHOo~dlAQ__"
                alt=""
              />
              <span className="text-sm font-bold">Lina</span>
            </div>
            <p className="text-start">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <div className="flex justify-between items-center">
              <Link className="underline">Read more</Link>
              <p>251,232</p>
            </div>
          </div>
        </div>
        <div className="cards w-1/2 flex flex-col bg-white p-8 gap-4 rounded-3xl">
          <img
            className="rounded-2xl"
            src="https://s3-alpha-sig.figma.com/img/e4c7/276a/25a9cc6960c67cafa4666142463a3cc6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4JNRW4pHi5ZXabYFaoEiaKUDjzRKu4p8nyzA7hr~e3f-GJ2aiOAgAkOamElyYjw-pKJngQrOdyvHymPJwzm8-QL~16Ce3ySjYOY00i4ES0jw41kA1xObSbkTxlAPigtInIJIJ9u6Z~l4vYGRzDejG2MNi~ITHmN9ocNzgtva9fHSM62UfmJU~VHk7bLFQeVjtut3mxGm7SLlz7aqrAhyZWN148pxhTikvE~R42Dnzang9P0rn-PQpR18PhpSuILrhNlifAlA3hVKO67qLu3jpz0qsLAV8I5tIYCpwH-Rh-nlY~2dpAcWy83BXUZqWHr9iycER8nbKwaX8-If6qHMQ__"
            alt=""
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl text-start">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>
            <div className="flex flex-row items-center gap-4">
              <img
                className="rounded-full w-12 h-12 bg-gray-200 object-top"
                src="https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mlkQsWWXGBK7BUsQj5p-0rwTOwk7mkBEvAENJxtWEd1hXIYMbdJpp9HjO~g5J8Ce2eWsdJYSAWbaFrRmH9ce4nINfTshi~QTnWBMLTB6ZW9XwsHBoNCmAwJMb96D1hsUxnis4Ts13LdDso3wt-We5cO4mnwVQE0P-e6D7nUyz6COhiY-sx0f7gJnpNa0XLnjlDnhRrAdTyWxv1ebJCAFatBckz6GyEVMx~b-UyKEKZQ6haToxNpReznuvSJk8PYo1tAdzwQgVxcNkALrB02Zt00tUZe6TR6sMMKDYlhfo~aWIiW59dzSan5YcH-lIgibsrRG3cD03MurGxHOo~dlAQ__"
                alt=""
              />
              <span className="text-sm font-bold">Lina</span>
            </div>
            <p className="text-start">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <div className="flex justify-between items-center">
              <Link className="underline">Read more</Link>
              <p>251,232</p>
            </div>
          </div>
        </div>
      </div>
    <div className="flex justify-end gap-4 py-8">
    <button>left</button>
    <button>right</button>
    </div>
    </div>
  );
}

export default RelatedBlog;
