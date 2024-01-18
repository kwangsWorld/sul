package com.sul.app.address.service;

import java.util.List;

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
	
	//�추가
	public int plus(AddressVo vo) throws Exception {
		return dao.plus(sst, vo);
	}

	//삭제
	public int delete(AddressVo vo) {
		return dao.delete(sst, vo);
	}

	//목록조회
	public List<AddressVo> list(AddressVo vo) {
		return dao.list(sst, vo);
	}

}
