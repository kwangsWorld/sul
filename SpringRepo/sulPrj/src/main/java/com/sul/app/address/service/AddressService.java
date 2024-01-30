package com.sul.app.address.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.address.dao.AddressDao;
import com.sul.app.address.vo.AddressVo;
import com.sul.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AddressService {

	private final AddressDao dao;
	private final SqlSessionTemplate sst;
	
	//주소추가
	public int plus(AddressVo vo) throws Exception {
		return dao.plus(sst, vo);
	}
	
	//기본배송지 설정
	public int selectBasicAdrress(AddressVo vo) {
		return dao.selectBasicAdrress(sst, vo);
	}

	//주소삭제
	public int delete(AddressVo vo) {
		return dao.delete(sst, vo);
	}

	//목록조회
	public List<AddressVo> list(AddressVo vo) {
		return dao.list(sst, vo);
	}
	
    //기본배송지 조회
    public MemberVo loadBasic(MemberVo vo) {
        return dao.loadBasic(sst, vo);
    }

}
