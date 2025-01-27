function Header({ text }: { text: string }) {
  return (
    <div className="order-1 text-5xl lg:text-6xl xl:text-7xl font-extrabold">
      {text}
    </div>
  );
}

export default Header;
