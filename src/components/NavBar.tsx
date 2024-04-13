// To make it client component :for ui manupualation , hooks etc
"use client";

function Navbar() {
  return (
    <div className="grid sm:grid-cols-12 grid-cols-12 m-5 justify-center">
      <div className="col-span-full min-h-[80px] rounded bg-orange-200 shadow-xl">
        <h2 className="text-center">Navbar</h2>
      </div>
    </div>
  );
}

export default Navbar;
