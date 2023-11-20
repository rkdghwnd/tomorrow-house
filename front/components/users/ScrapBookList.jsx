import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../reducers/userSlice';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

const ScrapBookList = ({ editOn }) => {
  const dispatch = useDispatch();
  const { scrapBook, exhibitionsScrapBook } = useSelector(
    (state) => state.user
  );

  const onClickBookmarkItem = useCallback(
    (index) => () => {
      dispatch(
        userSlice.actions.checkScrap({
          index,
        })
      );
    },
    []
  );

  const onClickExhibitionsBookmarkItem = useCallback(
    (index) => () => {
      dispatch(
        userSlice.actions.checkExhibitionsScrap({
          index,
        })
      );
    },
    []
  );
  return (
    <article className="scrap-book-list">
      {scrapBook.scrap.map(({ id, image_url, on }, index) => {
        return (
          <div className="scrap-book-list-item" key={shortid.generate()}>
            <Link to={`/productions/${id}`}>
              <img src={image_url} alt="스크랩 이미지" />
            </Link>
            {editOn && (
              <>
                <div
                  className={`item-overlay${on ? ' is-active' : ''}`}
                  onClick={onClickBookmarkItem(index)}
                ></div>
                <input
                  type="checkbox"
                  defaultChecked={on}
                  onClick={onClickBookmarkItem(index)}
                />
              </>
            )}
            <span>상품</span>
          </div>
        );
      })}
      {exhibitionsScrapBook.map(({ id, image_url, on }, index) => {
        return (
          <div className="scrap-book-list-item" key={shortid.generate()}>
            <Link to={`/exhibitions/${id}`}>
              <img
                src={`${import.meta.env.VITE_FRONT_END_DOMAIN}/${image_url}`}
                alt="기획전 이미지"
              />
            </Link>
            {editOn && (
              <>
                <div
                  className={`item-overlay${on ? ' is-active' : ''}`}
                  onClick={onClickExhibitionsBookmarkItem(index)}
                ></div>
                <input
                  type="checkbox"
                  defaultChecked={on}
                  onClick={onClickExhibitionsBookmarkItem(index)}
                />
              </>
            )}
            <span>상품</span>
          </div>
        );
      })}
    </article>
  );
};

export default ScrapBookList;
