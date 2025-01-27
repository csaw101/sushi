function Footer() {
  return (
    <div className="flex m-16 font-minionpro">
      <div className="flex flex-col flex-1 space-y-8">
        <div className="cursor-pointer text-3xl font-extrabold font-dorispp text-[#f872a7]">
          SUSHI
        </div>
        <div className="text-4xl">
          Food For The Body Is Not
          <br />
          Enough. There Must Be
          <br />
          Food For The Soul
        </div>
      </div>
      <div className="flex flex-col flex-1 text-center space-y-4">
        <div className="text-4xl w-fit m-auto font-extrabold">Main Menu</div>
        <div className="cursor-pointer w-fit m-auto text-2xl">About</div>
        <div className="cursor-pointer w-fit m-auto text-2xl">Menus</div>
        <div className="cursor-pointer w-fit m-auto text-2xl">Events</div>
        <div className="cursor-pointer w-fit m-auto text-2xl">Offer</div>
      </div>
      <div className="flex flex-col flex-1 text-center space-y-4">
        <div className="w-fit m-auto font-extrabold text-4xl">Information</div>
        <div className="cursor-pointer w-fit m-auto text-2xl">Contact</div>
        <div className="cursor-pointer w-fit m-auto text-2xl">Order &amp; Returns</div>
        <div className="cursor-pointer w-fit m-auto text-2xl">Videos</div>
        <div className="cursor-pointer w-fit m-auto text-2xl">Reservation</div>
      </div>
      <div className="flex flex-col flex-1 space-y-4 mx-auto">
        <div className="text-4xl font-extrabold">Address</div>
        <div className="text-2xl">
          777 Brockton Avenue,
          <br />
          Abington MA 2351
        </div>
      </div>
    </div>
  );
}

export default Footer;
