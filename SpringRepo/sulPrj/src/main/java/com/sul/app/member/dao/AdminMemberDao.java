package com.sul.app.member.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.member.vo.MemberVo;

@Repository
public class AdminMemberDao {

	//회원목록 조회
	public List<MemberVo> list(SqlSessionTemplate sqlSessionTemplate) {
		return sqlSessionTemplate.selectList("AdminMemberMapper.list");
	}

	// 회원 목록 상세 조회
	public MemberVo detail(SqlSessionTemplate sqlSessionTemplate, MemberVo vo) {
		return sqlSessionTemplate.selectOne("AdminMemberMapper.detail", vo);
	}
	
	// 회원 삭제
	public int delete(SqlSessionTemplate sqlSessionTemplate, MemberVo vo) {
		return sqlSessionTemplate.update("AdminMemberMapper.delete", vo);
	}

}