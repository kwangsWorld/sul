package com.sul.app.cart.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.cart.dao.CartDao;
import com.sul.app.cart.vo.CartVo;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartService {

	private final CartDao dao;
	private final SqlSessionTemplate sst;

	//장바구니 담기
	public int add(ProductVo vo) {
		
		return dao.add(sst, vo);
	}

	//장바구니 조회
	public List<ProductVo> list(CartVo vo) {
		
		return dao.list(sst, vo);
	}

	public int deleteList(List<String> nums) {
		
		return dao.deleteList(sst, nums);
	}
}
