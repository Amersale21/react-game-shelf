function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header mb-4">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export default PageHeader;
