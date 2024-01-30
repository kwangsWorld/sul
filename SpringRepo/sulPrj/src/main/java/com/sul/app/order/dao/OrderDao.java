package com.sul.app.order.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.cart.vo.CartVo;
import com.sul.app.order.vo.OrderVo;

@Repository
public class OrderDao {
	
	//주문 추가
	public int add(SqlSessionTemplate sst, OrderVo vo) {
		return sst.insert("OrderMapper.add", vo);
	}

	//주문 목록 추가
	public int addList(SqlSessionTemplate sst, OrderVo vo) {
		
		return sst.insert("OrderMapper.addList", vo);
	}
	
	//장바구니 주문 목록 추가
	public int addCartList(SqlSessionTemplate sst, List<CartVo> vo) {
		int cnt = vo.size();
		
		int tempCnt =0;
		for (CartVo cartVo : vo) {
		tempCnt += sst.insert("OrderMapper.addCartList",cartVo);
		}
		
		return 1;
	}

	//내가 주문한 목록
	public List<OrderVo> list(SqlSessionTemplate sst, OrderVo vo) {
		return sst.selectList("OrderMapper.list",vo);
	}
	
	//취소한 목록
	public List<OrderVo> delete(SqlSessionTemplate sst, OrderVo vo) {
		return sst.selectList("OrderMapper.delete",vo);
	}
	//상세조회
	public List<OrderVo> detail(SqlSessionTemplate sst, OrderVo vo) {
		return sst.selectList("OrderMapper.detail", vo);
	}

	//주문 취소
	public int cancel(SqlSessionTemplate sst, OrderVo vo) {
		return sst.update("OrderMapper.cancel", vo);
	}




}
