import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 xl:px-8 ${className}`}>
      {children}
    </div>
  );
}
