package com.sul.app.buy.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.buy.dao.BuyDao;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BuyService {

	private final BuyDao dao;
	private final SqlSessionTemplate sst;
	
	//구매하기
	public int buy(ProductVo vo) {
		return dao.buy(sst, vo);
	}

	public List<ProductVo> buyList(ProductVo vo) {
		return dao.buyList(sst, vo);
	}

}
