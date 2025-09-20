import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
 

 
const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mern Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];


const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchjobHandler = (query) => {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
  }
  return (
    <div className="px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Categories
        </h1>
        <p className="text-center text-gray-600">
          Explore our extensive job market.
        </p>
      </div>
      <Carousel className="w-full max-w-5xl mx-auto my-8">
        <CarouselContent className="-ml-2">
          {Category.map((category, index) => {
            return (
              <CarouselItem key={index} className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Button onClick={() => searchjobHandler(category)} className="w-full">
                  {category}
                </Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;
