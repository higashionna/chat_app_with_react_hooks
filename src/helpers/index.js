const currentDate = () => {
  const currentMonth = new Date().getMonth() + 1
  const currentDate = new Date().getDate()
  const currentHours = new Date().getHours()
  const currentMinutes = new Date().getMinutes()

  return `${ currentMonth }-${ currentDate } ${ currentHours }:${ currentMinutes }`
}

export default currentDate;
