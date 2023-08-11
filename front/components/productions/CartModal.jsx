import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';

const CartModal = () => {
  const dispatch = useDispatch();
  const { cartModalVisible } = useSelector((state) => state.modal);
  const closeCartModal = useCallback(() => {
    dispatch(modalSlice.actions.closeModal());
  }, []);

  return (
    <aside className={`cart-modal ${cartModalVisible ? 'is-active' : ''}`}>
      <h1 className="cart-title">장바구니에 상품을 담았습니다</h1>

      <div className="button-group">
        <a className="btn-48 btn-primary" href="/">
          {' '}
          장바구니 보러가기{' '}
        </a>
        <button
          className="btn-48 btn-secondary"
          type="button"
          onClick={closeCartModal}
        >
          확인
        </button>
      </div>
    </aside>
  );
};

export default CartModal;
