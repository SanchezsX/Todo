const Title = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <h1 className="text-4xl font-semibold mb-10 text-primary">
      {formattedDate}
    </h1>
  );
}

export default Title;
