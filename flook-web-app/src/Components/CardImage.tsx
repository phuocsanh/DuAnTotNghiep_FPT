import moment from 'moment';
import namePage from '../Constants/NamePage';
import { Link, useNavigate } from 'react-router-dom';

export interface CardImageProps {
  index: number;
  item: {
    _id: string;
    title: string;
    author: [
      { 
        name: string;
      }
    ];
    description: string;
    image: {
      wallPaper: {
        id: string;
        url: string;  
      },
      bookCover: {
        id: string;
        url: string;  
      },
    };
  };
}

const CardImage: React.FC<CardImageProps> = props => { 
  const { item, index } = props;
  const navigate = useNavigate();
  const handleClick = (id: any) => () => navigate(`${namePage.detail}/${id}`)
  
  return (
    <section className="card-image" key={index} onClick={handleClick(item._id)}>
      <div className="card" style={{ backgroundImage: `url(${item?.image?.bookCover?.url})` }}>
        <div className="card-spacing" />
        <div className="card-content">
          <div className="card-author">
            {item.author?.map((author) => <span>
              {item.author.length >= 1 ? author.name +', ' : author.name}
              </span> )}
          </div>
          <div className="card-title">{item?.title}</div>
          <div className="card-rating">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</div>
          <div className="card-day">{moment('12/03/2021').format('dddd')}</div>
          <div className="card-description"> {item?.description} </div>
          <Link className="link" to={namePage?.detail}>Read More</Link>
        </div>
      </div>
    </section>
  );
}

export default CardImage