import Subscribe from './Components/Subscribe'
import SliderItem from '../../Components/SliderItem'
import { dataCarouselDemo } from '../../Utils/settingsSlider'
import Selector from '../../Shop/Selector'
import Action from '../../Shop/Action'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {

  const [ data, setData ] = useState({
    page: 1,
    allowedAge: [],
    chapters: [],
    search: [],
    status: [],
    author: [],
    genre: [],
    sort: 'view'
  })

  const dispatch = useDispatch();

  const listBook = Selector.app.DataManyManga();
  console.log(listBook)

  useEffect(() => {
    dispatch(Action.app.findManga(data));
  }, [dispatch, data]);


  return (
    <section>
      { listBook.length > 3 && <SliderItem data={listBook} title='top manga'/> }
      <Subscribe/>
      <SliderItem data={dataCarouselDemo} title='manga'/>
    </section>
  )
}
export default HomePage
