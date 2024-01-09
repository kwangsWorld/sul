package com.sul.app.address.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.address.dao.AddressDao;
import com.sul.app.address.vo.AddressVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AddressService {

	private final AddressDao dao;
	private final SqlSessionTemplate sst;
	
	//林家 眠啊
	public int plus(AddressVo vo) throws Exception {
		return dao.plus(sst, vo);
	}

	//林家昏力
	public int delete(AddressVo vo) {
		return dao.delete(sst, vo);
	}

}
