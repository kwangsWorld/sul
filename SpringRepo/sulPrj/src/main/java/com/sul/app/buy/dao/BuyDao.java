package com.sul.app.buy.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.product.vo.ProductVo;

@Repository
public class BuyDao {

	//구매하기
	public int buy(SqlSessionTemplate sst, ProductVo vo) {
		
		return sst.insert("BuyMapper.buy", vo);
	}

	public List<ProductVo> buyList(SqlSessionTemplate sst, ProductVo vo) {
		return sst.selectList("BuyMapper.buyList", vo);
	}

}
