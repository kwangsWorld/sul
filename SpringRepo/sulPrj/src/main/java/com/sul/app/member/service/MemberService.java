package com.sul.app.member.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sul.app.member.dao.MemberDao;
import com.sul.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
//@Transactional
public class MemberService {

	private final MemberDao dao;
	private final SqlSessionTemplate sst;
	
	//회원가입
	public int join(MemberVo vo) throws Exception {
		
		String id = vo.getId();
		if(id.length() < 5) {
			throw new Exception("아이디 5글자 이상");
		}
		if("admin".equalsIgnoreCase(id)) {
			throw new Exception("사용 불가한 아이디 입니다.");
		}
		return dao.join(sst, vo);
	}

	//로그인
	public MemberVo login(MemberVo vo) {
		return dao.login(sst, vo);
	}

	//회원 정보 수정
	public int edit(MemberVo vo) {
		System.out.println("ddd");
		int i = dao.edit(sst, vo);
		return i;
	}

	//회원 탈퇴
	public int quit(MemberVo vo) {
		return dao.quit(sst, vo);
	}

	//회원상세조회
	public List<MemberVo> detail() {
		return dao.detail(sst);
	}

}