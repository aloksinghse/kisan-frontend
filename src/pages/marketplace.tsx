import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Marketplace = () => {
  let products = [
    {
      name: "Mango",
      price: 100,
      tag: "Fruit",
      image: "/assets/images/mango.jpeg",
    },
    {
      name: "Mango",
      price: 100,
      tag: "Fruit",
      image: "/assets/images/mango.jpeg",
    },
    {
      name: "Mango",
      price: 100,
      tag: "Fruit",
      image: "/assets/images/mango.jpeg",
    },
    {
      name: "Mango",
      price: 100,
      tag: "Fruit",
      image: "/assets/images/mango.jpeg",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Marketplace
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here you can find all the products and services that are available
            for sale or rent on the platform.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {products.map((product, ids) => {
            // return <ProductItemCard {...product} key={ids} />;
            return (
              <article
                key={ids}
                className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src={product.image}
                  alt="Product"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      {product.tag}
                    </span>
                    {/* <span className="text-sm">14 days ago</span> */}
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href="#">{product.name}</Link>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    {"This is a product description"}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      {/* <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    /> */}
                      <span className="font-medium text-2xl dark:text-white">
                        {product.price} INR
                      </span>
                    </div>
                    <Button
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Buy
                      {/* <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg> */}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;

function ProductItemCard(props: any) {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-2">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-2xl uppercase">
          {props.name}
        </h1>
        <p className="text-gray-600 text-sm mt-1">{props.description}</p>
      </div>
      <img
        className="h-56 w-full object-cover mt-2"
        src={props.image}
        alt={props.title}
      />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-lg">{props.price}</h1>
        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
