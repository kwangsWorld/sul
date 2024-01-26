package com.sul.app.order.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.order.vo.OrderVo;

@Repository
public class OrderDao {
	
	public int add(SqlSessionTemplate sst, OrderVo vo) {
		return sst.insert("OrderMapper.add", vo);
	}

	//내가 주문한 목록
	public List<OrderVo> list(SqlSessionTemplate sst, OrderVo vo) {
		return sst.selectList("OrderMapper.list",vo);
	}
	
	//내가 주문한 목록
	public List<OrderVo> delete(SqlSessionTemplate sst, OrderVo vo) {
		return sst.selectList("OrderMapper.delete",vo);
	}



}
