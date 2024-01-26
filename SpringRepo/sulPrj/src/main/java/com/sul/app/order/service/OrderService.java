package com.sul.app.order.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.address.dao.AddressDao;
import com.sul.app.order.dao.OrderDao;
import com.sul.app.order.vo.OrderVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderService {

	private final OrderDao dao;
	private final SqlSessionTemplate sst;
	
	//구매목록 추가
//	public int add(OrderVo vo) {
//		return dao.add(sst, vo);
//	}
	
	//내가 주문한 목록
	public List<OrderVo> list(OrderVo vo) {
		return dao.list(sst, vo);
	}
	
	//내가 주문한 취소목록
	public List<OrderVo> delete(OrderVo vo) {
		return dao.delete(sst, vo);
	}
		

}
