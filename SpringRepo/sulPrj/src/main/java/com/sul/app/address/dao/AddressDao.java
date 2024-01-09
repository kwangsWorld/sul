package com.sul.app.address.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.address.vo.AddressVo;

@Repository
public class AddressDao {

	//林家眠啊
	public int plus(SqlSessionTemplate sst, AddressVo vo) {
		return sst.insert("AddressMapper.plus", vo);
	}

	//林家 昏力
	public int delete(SqlSessionTemplate sst, AddressVo vo) {
		return sst.update("AddressMapper.delete", vo);
	}

}
