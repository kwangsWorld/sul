package com.sul.app.address.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.address.vo.AddressVo;
import com.sul.app.member.vo.MemberVo;

@Repository
public class AddressDao {

	// 주소
	public int plus(SqlSessionTemplate sst, AddressVo vo) {
		return sst.insert("AddressMapper.plus", vo);
	}

	// 기본배송지 설정
	public int selectBasicAdrress(SqlSessionTemplate sst, AddressVo vo) {
		return sst.update("AddressMapper.selectBasicAdrress", vo);
	}

	// 삭제
	public int delete(SqlSessionTemplate sst, AddressVo vo) {
		return sst.update("AddressMapper.delete", vo);
	}

	// 목록
	public List<AddressVo> list(SqlSessionTemplate sst, AddressVo vo) {
		return sst.selectList("AddressMapper.list", vo);
	}
	
	//기본배송지 조회
    public MemberVo loadBasic(SqlSessionTemplate sst, MemberVo vo) {
        return sst.selectOne("AddressMapper.loadBasic", vo);
    }

}
