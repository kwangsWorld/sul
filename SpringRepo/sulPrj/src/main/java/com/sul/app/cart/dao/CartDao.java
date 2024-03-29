package com.sul.app.cart.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.cart.vo.CartVo;
import com.sul.app.product.vo.ProductVo;

@Repository
public class CartDao {

	//장바구니 추가
	public int add(SqlSessionTemplate sst, ProductVo vo) {
		
		return sst.insert("CartMapper.add",vo);
	}

	//장바구니 조회
	public List<ProductVo> list(SqlSessionTemplate sst, CartVo vo) {
		
		return sst.selectList("CartMapper.list", vo);
	}

	public int deleteList(SqlSessionTemplate sst, List<String> nums) {
		
		return sst.delete("CartMapper.deleteList", nums);
	}

}
