function Footer() {
  function handleContactClick() {
    alert("Contact us at skinandbodycarebymichaela@gmial.com");
    }

  return (
    <div className="flex items-center w-full h-full">
      {/* left spacer */}
      <div className="h-10 w-10 opacity-0" />

      {/* center */}
      <div className="flex-1 flex justify-center">
        <p
          onClick={handleContactClick}
          className="hover:underline underline-offset-4 cursor-pointer"
        >
          Contact
        </p>
      </div>

      {/* right */}
    <div className="h-full w-20 border border-black shrink-0 overflow-hidden rounded-full">
      <img
        src="/logo.png"
        alt="logo"
        className="block h-full w-full object-cover"
      />
    </div>


    </div>
  );
}

export default Footer;
